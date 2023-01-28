import json
import requests
import csv

import os

if not os.path.exists("data"):
 os.makedirs("data")

# GitHub Authentication function
def github_auth(url, lsttoken, ct):
    jsonData = None
    try:
        ct = ct % len(lstTokens)
        headers = {'Authorization': 'Bearer {}'.format(lsttoken[ct])}
        request = requests.get(url, headers=headers)
        jsonData = json.loads(request.content)
        ct += 1
    except Exception as e:
        pass
        print(e)
    return jsonData, ct

# @dictFiles, empty dictionary of files
# @lstTokens, GitHub authentication tokens
# @repo, GitHub repo
def countfiles(dictfiles, lsttokens, repo):
    ipage = 1  # url page counter
    ct = 0  # token counter

    #try:
        # loop though all the commit pages until the last returned empty page
    while True:
            spage = str(ipage)
            commitsUrl = 'https://api.github.com/repos/' + repo + '/commits?page=' + spage + '&per_page=100'
            jsonCommits, ct = github_auth(commitsUrl, lsttokens, ct)

            # break out of the while loop if there are no more commits in the pages
            if len(jsonCommits) == 0:
                break
            # iterate through the list of commits in  spage
            for shaObject in jsonCommits:
                sha = shaObject['sha']
                # For each commit, use the GitHub commit API to extract the files touched by the commit
                shaUrl = 'https://api.github.com/repos/' + repo + '/commits/' + sha
                shaDetails, ct = github_auth(shaUrl, lsttokens, ct)
                author = shaObject['commit']['author']['name']
                date = shaObject['commit']['author']['date'][0:10]
                filesjson = shaDetails['files']
                for filenameObj in filesjson:
                    filename = filenameObj['filename']
                    print(filename)
                    matches_list = ['java', 'kt', '.cpp']
                    for x in matches_list:
                        if (x in filename):
                            if dictfiles.get(filename) is None:
                                author_touches = [(author, date)]
                                dictfiles[filename] = (1, author_touches)
                            else:
                                count_new = dictfiles[filename][0]+1
                                author_touches = dictfiles[filename][1]
                                author_touches.append((author, date))
                                dictfiles[filename] = (count_new, author_touches)
            ipage += 1
    #except:
        #print("Error receiving data")
        #exit(0)
# GitHub repo
repo = 'scottyab/rootbeer'
# repo = 'Skyscanner/backpack' # This repo is commit heavy. It takes long to finish executing
# repo = 'k9mail/k-9' # This repo is commit heavy. It takes long to finish executing
# repo = 'mendhak/gpslogger'


# put your tokens here
# Remember to empty the list when going to commit to GitHub.
# Otherwise they will all be reverted and you will have to re-create them
# I would advise to create more than one token for repos with heavy commits
lstTokens = ["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"]

dictfiles = dict()
countfiles(dictfiles, lstTokens, repo)
print('Total number of files: ' + str(len(dictfiles)))

file = repo.split('/')[1]
# change this to the path of your file
fileOutput = 'C:/Users/kln95/cs472-team6/repo_mining/data/kristy-nguyen_authorsFileTouches_' + file + '.csv'
rows = ["Filename", "Touches", "Name & Date"]
fileCSV = open(fileOutput, 'w')
writer = csv.writer(fileCSV)
writer.writerow(rows)

bigcount = None
bigfilename = None
for filename, count in dictfiles.items():
    touches = count[0]
    rows = [filename, count[0], count[1]]
    writer.writerow(rows)
    if bigcount is None or touches > bigcount:
        bigcount = touches
        bigfilename = filename
fileCSV.close()
print('The file ' + bigfilename + ' has been touched ' + str(bigcount) + ' times.')
