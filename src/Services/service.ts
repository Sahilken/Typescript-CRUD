import { log } from "console";
import { Post } from "../Models/posts";
export class postService {
   //create a post
   async createPost(data: any) {
      try {
         const newPost = await Post.create(data);
         return newPost;
      } catch (err) {
         console.log(err);
      }
   }

   //get all posts
   async getPosts() {
      try {
         const posts = await Post.find({});
         return posts;
      } catch (err) {
         console.log(err);
      }
   }
   //get a single post
   async getPost(id: string) {
      try {
         const post = await Post.findById({ _id: id });
         if (!post) return "post not available";
         return post;
      } catch (err) {
         console.log(err);
      }
   }

   //update an post:
   async updatePost(id: string, data: any) {
      try {
         const postz = await Post.findByIdAndUpdate({ _id: id }, data, {
            new: true,
         });

         if (!postz) return "post not available";
         return postz;
      } catch (error) {
         console.log(error);
      }
   }
   async deletePost(id: string) {
      try {
         const post = await Post.findByIdAndDelete(id);
         if (!post) return "post not available";
      } catch (error) {
         console.log(error);
      }
   }
}
export const postServices = new postService();
