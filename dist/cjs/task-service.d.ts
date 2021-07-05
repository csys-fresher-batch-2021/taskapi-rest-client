export declare class TaskService {
    getAllTasks(): Promise<import("axios").AxiosResponse<any>>;
    getTask(id: number): Promise<import("axios").AxiosResponse<any>>;
    addTask(task: any): Promise<import("axios").AxiosResponse<any>>;
    deleteTask(taskId: number): Promise<import("axios").AxiosResponse<any>>;
    updateStatus(taskId: number, status: string): Promise<import("axios").AxiosResponse<any>>;
}
