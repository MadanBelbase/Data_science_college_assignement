import { Router } from 'express';
import { loginUser ,RegisterUser} from '../controllers/UserAuthController';
const Authrouter = Router();

Authrouter.post('/login', loginUser);
Authrouter.post('/signup', RegisterUser);


export default Authrouter;

