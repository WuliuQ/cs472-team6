export const Tabs = {
    ComponentOptionsTab: 'ComponentOptionsTab',
    ComponentsListTab: 'ComponentsListTab',
    PageOptionsTab: 'PageOptionsTab'
}

export const Gradients = {
    default: 'from-grad1 via-grad2 via-grad3 to-grad4',
    'green-blue': 'from-green-400 to-blue-500'
}

export const Direction = {
    UP: 'up',
    DOWN: 'down'
}

export function toJSON(object) {
  return JSON.stringify(
    object,
    (key, value) => {
      if (value instanceof Map) {
        return Object.fromEntries(value.entries());
      } else if (value instanceof Set) {
        return [...value];
      }

      return value;
    },
    2
  );
}

export function createIndexHTML(options) {
  const { title = "Portfolio Builder", icon = '/vite.svg', author = '', description = 'My Portfolio', language = 'en' } = options;
  return `<!DOCTYPE html>
  <html lang="${language}">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" href="${icon.trim() ? icon.trim() : '/vite.svg'}" />
      <meta name="author" content="${author}">
      <meta name="description" content="${description}">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@700&family=Inter:wght@400;600&display=swap" rel="stylesheet">
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.jsx"></script>
    </body>
  </html>
  `;
}