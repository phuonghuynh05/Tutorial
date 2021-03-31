"use strict";
// Copyright IBM Corp. 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo-list
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListImage = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const todo_list_model_1 = require("./todo-list.model");
let TodoListImage = class TodoListImage extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: false,
    }),
    tslib_1.__metadata("design:type", Number)
], TodoListImage.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], TodoListImage.prototype, "value", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => todo_list_model_1.TodoList),
    tslib_1.__metadata("design:type", Number)
], TodoListImage.prototype, "todoListId", void 0);
TodoListImage = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], TodoListImage);
exports.TodoListImage = TodoListImage;
//# sourceMappingURL=todo-list-image.model.js.map