import { Router, Request, Response } from "express";

import CreateCourseService from "./CreateCourseService";

const routes = Router();

routes.post("/create", (request: Request, response: Response) => {
  const { name, duration, educator } = request.body;

  CreateCourseService.execute({ name, duration, educator });
  CreateCourseService.execute({ name: "React JS", educator: "Diego" });

  response.status(200).send();
});

routes.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

export default routes;
