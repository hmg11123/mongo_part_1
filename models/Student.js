import mongoose from "mongoose";

const Schema = mongoose.Schema;

// 두번째 파라미터는 설정값
const Student = new Schema(
 {
  name: {
   type: String,
   required: true,
  },
  age: {
   type: Number,
   required: true,
  },
  school: {
   type: String,
   required: true,
  },
  mobile: {
   type: String,
   required: true,
  },
  gender: {
   type: String,
   required: true,
  },
 },
 { versionKey: false }
);

// model 파라미터 첫번째: 알리야스(별칭) 두번째: 리얼스키마(실제 데이터) 세번째 dbName(스키마 이름)
// 스키마의 이름으로 Student를 사용하고 db의 Student를 사용
export default mongoose.model(`Student`, Student, `Student`);
