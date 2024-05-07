import { postServices } from "../Services/service";
import { Request, Response } from "express";
import { PostschemaValidate } from "../Models/posts";
import axios from "axios";
class postController {
   //add post
   addpost = async (req: Request, res: Response) => {
      const data = {
         title: req.body.title,
         author: req.body.author,
         description: req.body.description,
         published: req.body.published,
      };

      const { error, value } = PostschemaValidate.validate(data);

      if (error) res.send(error.message);
      else {
         const post = await postServices.createPost(value);
         res.status(201).send(post);
      }
   };
   // get all posts
   getPosts = async (req: Request, res: Response) => {
      console.log("inside get post");

      const id = req.params.id;
      const post = await postServices.getPost(id);
      res.send(post);
   };

   getAPost = async (req: Request, res: Response) => {
      const id = req.params._id;
      const post = await postServices.getPost(id);
      res.send(post);
   };

   updatePost = async (req: Request, res: Response) => {
      const id = req.params.id;
      await postServices.deletePost(id);
      res.send("Post deleted");
   };

   deletePost = async (req: Request, res: Response) => {
      const id = req.params.id;
      await postServices.deletePost(id);
      res.send("POst deleted");
   };

   getFromOther = async (req: Request, res: Response) => {
      console.log("inside get from other");

      let config = {
         method: "post",
         url: "https://jsonplaceholder.typicode.com/posts",
         headers: {},
      };

      // let postConfig = {
      //    method: "post",
      //    url: "http://localhost:3000/",
      //    headers: {},
      // }
         try{
            const response = await axios.request(config);
            console.log(response.data);
            res.json(response.data);

         } catch(error:any) {
            console.error(error);
            res.status(500).send({message:"internal server error"})
         }
   };
}
export const PostController = new postController();
