"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Register = (app) => {
    app.use(async (ctx, next) => {
        try {
            await next();
        }
        catch (err) {
            ctx.status = err.status || 500;
            ctx.body = err.message;
            ctx.app.emit('error', err, ctx);
        }
    });
    app.on('error', (err, ctx) => {
        console.log(err, ctx);
    });
};
const ErrorHandler = {
    Register
};
exports.default = ErrorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IucmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3IvZXJyb3IucmVnaXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQVEsRUFBRSxFQUFFO0lBQzFCLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUN4QixJQUFJO1lBQ0YsTUFBTSxJQUFJLEVBQUUsQ0FBQztTQUNkO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixHQUFHLENBQUMsTUFBTSxHQUFLLEdBQWlCLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztZQUMvQyxHQUFHLENBQUMsSUFBSSxHQUFJLEdBQWlCLENBQUMsT0FBTyxDQUFDO1lBQ3RDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBRTNCLE9BQU8sQ0FBQyxHQUFHLENBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBRSxDQUFBO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0FBQ1QsQ0FBQyxDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUc7SUFDakIsUUFBUTtDQUNYLENBQUE7QUFFRCxrQkFBZSxZQUFZLENBQUUifQ==