import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import AuthRouter from './AuthModule/AuthRouter';
import PostRouter from './PostModule/PostRouter';
import BlogRouter from './BlogModule/BlogRouter';
import * as path from 'path';

export class Server {
  public static bootstrap(): Server {
    return new Server();
  }

  public app: express.Application;

  constructor() {
    // create expressjs application
    this.app = express();

    // configure application
    this.config();

    // add routes
    this.routes();
  }

  public config() {
    this.app.use(express.static(path.join(__dirname, 'public')));

    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      }),
    );

    this.app.use(cors());

    // catch 404 and forward to error handler
    this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
      err.status = 404;
      next(err);
    });
  }

  private routes() {
    const authRouter = new AuthRouter();
    const postRouter = new PostRouter();
    const blogRouter = new BlogRouter();

    this.app.use(authRouter.path, authRouter.router);
    this.app.use(postRouter.path, postRouter.router);
    this.app.use(blogRouter.path, blogRouter.router);
  }
}