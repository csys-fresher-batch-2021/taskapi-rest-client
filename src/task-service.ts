import axios from 'axios';

export class TaskService{

    async getAllTasks(){
        let url = "http://localhost:3000/api/v1/tasks";
        return axios.get(url);
    }

    async getTask(id:number){
        let url = "http://localhost:3000/api/v1/tasks/" + id;
        return axios.get(url);
    }
    
    async addTask(task:any){
        let url = "http://localhost:3000/api/v1/tasks";
        return axios.post(url,task);
    }

    async deleteTask(taskId:number){
        let url = "http://localhost:3000/api/v1/tasks/"+ taskId;
        return axios.delete(url);
    }

    async updateStatus(taskId:number, status:string){
        let data= {id: taskId, status:status};
        let url = "http://localhost:3000/api/v1/tasks/"+ taskId;
        return axios.patch(url,data);
    }
}

//Goal: Move this class to npm library, so that others 
//no need to create service class to call rest api

// HTML ( .js) ==> angular (.js = typescript)
