import './styles.css'

type Props = {
    btnName: string;
}

export default function BtnBlue({btnName} : Props){
    return(
        <button className="btn-blue">{btnName}</button>
    );
}