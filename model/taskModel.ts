import {Document, model, Schema, Types} from "mongoose";

interface iTask{
    companyName: string
    location: string
    staff: Array<{}>
    email: string
    password: string 
    project: string
}

interface iTaskData extends iTask, Document{};

const  taskModel = new Schema(
    {
      companyName:{
        type: String
      },
      email:{
        type: String,
        unique: true
      },
      password:{
        type: String
      },
      location:{
        type: String
      },
      staff:[
        {
            type: Types.ObjectId,
            ref: "staffs"
        }
      ],
      project:[
        {
            type: Types.ObjectId,
            ref: "projects"
        }
      ]
    },
    {timestamps: true}
);
export default model<iTaskData>("BindTasks",taskModel)