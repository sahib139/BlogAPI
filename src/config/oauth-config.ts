import querystring from "querystring";
import axios from "axios";
import {Request} from "express";

interface MyRequest extends Request{
  code?:string
}

export function getGoogleAuthURL() {
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const options = {
      redirect_uri: `http://localhost:5000/auth/google/callback`,
      client_id: process.env.GOOGLE_CLIENT_ID,
      access_type: 'offline',
      response_type: 'code',
      prompt: 'consent',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ].join(' '),
    };
    return `${rootUrl}?${querystring.stringify(options)}`;
    
}

  
export async function googleAuthCallback(response:MyRequest){
  const code = response.query.code;
  if(!code){
    return {err:"Unable to authenticate"};
  }
  const { data } = await axios({
    url: 'https://oauth2.googleapis.com/token',
    method: 'post',
    data: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `http://localhost:5000/auth/google/callback`,
      grant_type: 'authorization_code',
      code,
    },
  });

  const { id_token, access_token} = data;
  return {id_token};
}

export async function verifyGoogleAccessToken(access_token:string){
  const googleUser = await axios({
    url: 'https://www.googleapis.com/oauth2/v2/userinfo',
    method: 'get',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return googleUser.data;
}