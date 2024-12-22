import {Request,Response} from 'express';
import {User} from '../entities/User';
import AppDataSource from "../config/database";


export const createUser = async (req: Request, res: Response): Promise<void> => {
    try{
        const userRepository=AppDataSource.getRepository(User);
        const {name, email, password} = req.body;
        const user = new User();
        user.name=name;
        user.email=email;
        user.password=password;

        userRepository.merge(user, req.body);
        const savedUser= await userRepository.save(user);
        res.status(201).json({savedUser})
   
    } catch(err: any){
        res.status(500).json({message: err.message})
    }
};

export const getUsers = async (_req: Request, res: Response): Promise<void> => {
    try{
        const userRepository=AppDataSource.getRepository(User);
        const users = await userRepository.find();
        res.status(200).json({users})
    } catch(err: any){
        res.status(500).json({message: err.message})
    }
};


export const getUser = async (req: Request, res: Response): Promise<void> => {
    try{
        const userRepository=AppDataSource.getRepository(User);
        const user = await userRepository.findOneBy({
            id: parseInt(req.params.id)
        });
        if (user) {
            res.status(200).json({user})
        }else{
            res.status(404).json({message: "User not found"})

        }
    } catch(err: any){
        res.status(500).json({message: err.message})
    }
};


export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try{
        const userRepository=AppDataSource.getRepository(User);
        const user = await userRepository.findOneBy({
            id: parseInt(req.params.id)
        });
        if (user) {
            userRepository.merge(user, req.body);
            const updatedUser= await userRepository.save(user);
            res.status(200).json({updatedUser})
        }else{
            res.status(404).json({message: "User not found"})

        }
    } catch(err: any){
        res.status(500).json({message: err.message})
    }
};


export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try{
        const userRepository=AppDataSource.getRepository(User);
        const result = await userRepository.delete(req.params.id);
        if (result.affected) {
            res.status(200).json({message: "User deleted"})
        }else{
            res.status(404).json({message: "User not found"})
        }
    } catch(err: any){
        res.status(500).json({message: err.message})
    }
};





