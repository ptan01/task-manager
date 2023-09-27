import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/task/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen, }) => {


    const { register, handleSubmit, reset } = useForm();

    const dispatch = useDispatch()

    const onCancel = (e)=>{
        e.preventDefault()
        reset()
        setIsOpen(false)
    } 

    const onSubmit = (data) => {
        console.log(data)
        dispatch(addTask(data))
        reset()
        setIsOpen(false)
    }


    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="programing hero" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="font-semibold" htmlFor="title">Title</label>
                        <input className="w-full rounded-md" id="name" type="text" {...register("name")} />
                    </div>
                    <div>
                        <label className="font-semibold" htmlFor="description">Description</label>
                        <input className="w-full rounded-md" id="description" type="text" {...register("description")} />
                    </div>
                    <div>
                        <label className="font-semibold" htmlFor="deadline">Deadline</label>
                        <input className="w-full rounded-md" id="date" type="date" {...register("date")} />
                    </div>
                    <div>
                        <label className="font-semibold" htmlFor="assignto">assign to</label>
                        <select className="w-full rounded-md" id="assignto" {...register("assignto")}>
                            <option value="selim">Selim</option>
                            <option value="sumon">Sumon</option>
                            <option value="mojidul">Mojidul</option>
                            <option value="soriful">Soriful</option>
                            <option value="doha">Doha</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-semibold" htmlFor="priority">Priority</label>
                        <select className="w-full rounded-md" id="priority" {...register("priority")}>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <button className="btn btn-danger" onClick={onCancel} >Cancel</button>
                    <button className="btn btn-primary" type="submit">submit</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;