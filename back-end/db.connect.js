
const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://mohammed:FVcPMZfSfecGZs9n@cluster0.qdl5pcq.mongodb.net/expensetracker",
{
    useNewUrlParser: true,
    useUnifiedTopology:true
}
)


const connection =mongoose.connection;
connection.on('error',err=>console.log(err));
connection.on('connected',()=>console.log("Mongodb connected"));
