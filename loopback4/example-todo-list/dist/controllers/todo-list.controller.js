"use strict";
// Copyright IBM Corp. 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo-list
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TodoListController = class TodoListController {
    constructor(todoListRepository) {
        this.todoListRepository = todoListRepository;
    }
    async create(todoList) {
        return this.todoListRepository.create(todoList);
    }
    async count(where) {
        return this.todoListRepository.count(where);
    }
    async find(filter) {
        return this.todoListRepository.find(filter);
    }
    async updateAll(todoList, where) {
        return this.todoListRepository.updateAll(todoList, where);
    }
    async findById(id, filter) {
        return this.todoListRepository.findById(id, filter);
    }
    async updateById(id, todoList) {
        await this.todoListRepository.updateById(id, todoList);
    }
    async deleteById(id) {
        await this.todoListRepository.deleteById(id);
    }
    async replaceById(id, todoList) {
        await this.todoListRepository.replaceById(id, todoList);
    }
};
tslib_1.__decorate([
    rest_1.post('/todo-lists', {
        responses: {
            '200': {
                description: 'TodoList model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.TodoList) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.TodoList, {
                    title: 'NewTodoList',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/todo-lists/count', {
        responses: {
            '200': {
                description: 'TodoList model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.TodoList)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/todo-lists', {
        responses: {
            '200': {
                description: 'Array of TodoList model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.TodoList, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.TodoList)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/todo-lists', {
        responses: {
            '200': {
                description: 'TodoList PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.TodoList, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.TodoList)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.TodoList, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/todo-lists/{id}', {
        responses: {
            '200': {
                description: 'TodoList model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.TodoList, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.TodoList, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/todo-lists/{id}', {
        responses: {
            '204': {
                description: 'TodoList PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.TodoList, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.TodoList]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.del('/todo-lists/{id}', {
        responses: {
            '204': {
                description: 'TodoList DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListController.prototype, "deleteById", null);
tslib_1.__decorate([
    rest_1.put('/todo-lists/{id}', {
        responses: {
            '204': {
                description: 'TodoList PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.TodoList]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListController.prototype, "replaceById", null);
TodoListController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.TodoListRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TodoListRepository])
], TodoListController);
exports.TodoListController = TodoListController;
//# sourceMappingURL=todo-list.controller.js.map