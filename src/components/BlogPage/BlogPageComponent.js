import BlogPage from "./BlogPage";
import BlogPageOptions from "./BlogPageOptions";
import BlogPagePreview from "./BlogPagePreview.png";
import Component from "../../models/Component";

export const BlogPageComponent = new Component(
    'BlogPage', BlogPage, BlogPageOptions, BlogPagePreview, 
      {
        header: "Overview",
        paragraph: "example\nexample1\nexample2", 
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      }
)
