import { Response } from "express"

export default class ResponseBodyAdapter {
  public static adapt(data, res: Response) {
    if(data !== null) {
      const httpResponseCode = 200;
      const httpResponseMessage = "Http request successful";
      return res.json({
        data,
        httpResponseCode,
        httpResponseMessage
      })
    }

    else {
      const httpResponseCode = 400;
      const httpResponseMessage = "Http request failed";
      return res.json({
        data,
        httpResponseCode,
        httpResponseMessage
      })
    }
  }
}