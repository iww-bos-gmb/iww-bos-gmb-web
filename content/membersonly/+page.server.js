import { error, redirect } from '@sveltejs/kit'; 
import fs from 'fs'; 
import path from 'path'; 
import { marked } from 'marked';

const PASSWORD = 'mySecret123'; 

export async function load({ cookies }) 
{ const userPassword = cookies.get('auth_token'); 
 
if (userPassword !== PASSWORD) 
{ throw redirect(303, '/protected/login'); // Redirect if unauthorized } 
 
// Load Markdown file securely 
 const filePath = path.resolve('/iww-bos-gmb-web/content/membersonly/login/protected.md'); 
 const markdown = fs.readFileSync(filePath, 'utf-8'); 
 const htmlContent = marked(markdown); // Convert Markdown to HTML 
 return { content: htmlContent }; }
