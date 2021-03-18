/*
 *  name - string
 *  duration - string
 *  educator - string
 */

interface Course {
  name: string;
  duration?: number;
  educator: string;
}

class CreateCourseService {
  execute({ name, duration = 8, educator }: Course) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();
