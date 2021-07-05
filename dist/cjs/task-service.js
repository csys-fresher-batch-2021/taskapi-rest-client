"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const axios_1 = __importDefault(require("axios"));
class TaskService {
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = "http://localhost:3000/api/v1/tasks";
            return axios_1.default.get(url);
        });
    }
    getTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = "http://localhost:3000/api/v1/tasks/" + id;
            return axios_1.default.get(url);
        });
    }
    addTask(task) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = "http://localhost:3000/api/v1/tasks";
            return axios_1.default.post(url, task);
        });
    }
    deleteTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = "http://localhost:3000/api/v1/tasks/" + taskId;
            return axios_1.default.delete(url);
        });
    }
    updateStatus(taskId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = { id: taskId, status: status };
            let url = "http://localhost:3000/api/v1/tasks/" + taskId;
            return axios_1.default.patch(url, data);
        });
    }
}
exports.TaskService = TaskService;
//Goal: Move this class to npm library, so that others 
//no need to create service class to call rest api
// HTML ( .js) ==> angular (.js = typescript)
