import {FC} from "react";
import {removeErrorFromStore, setLastUpdate} from "../../../store/actions/globalActions";
import {useDispatch} from "react-redux";

const ReloadPageData: FC = () => {

    const dispatch = useDispatch()

    const onClickHandler = ()=>{
        dispatch(removeErrorFromStore())
        dispatch(setLastUpdate())
    }

    return (
        <div>
            <h1>We Are Sorry Something Went Wrong.</h1>
            <p>Please try again in few minutes</p>
            <button aria-label={'Reload'}
                    className={'btn btn-primary'}
                    onClick={()=>dispatch(()=>onClickHandler())}
            >
                Reload
            </button>
        </div>
    )
};
export default ReloadPageData
