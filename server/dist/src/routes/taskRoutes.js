"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_Controller_1 = require("../controllers/task.Controller");
const router = (0, express_1.Router)();
router.get('/', task_Controller_1.getTasks);
router.post('/', task_Controller_1.createTask);
router.patch('/:taskId/status', task_Controller_1.updateTaskStatus);
exports.default = router;
