import { rest } from "msw";

const baseURL = "https://drf-api-2023-6c240fdbe670.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 5,
        "username": "katie",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 5,
        "profile_image": "https://res.cloudinary.com/du4zinzmk/image/upload/v1/media/../default_profile_gyux5v",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];