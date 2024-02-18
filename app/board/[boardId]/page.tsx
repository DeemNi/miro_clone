import { Canvas } from "./_components/canvas";

interface BoardIdPageProps {
    params:{
        boardId: string;
    };
};

const BoardIdPage = () => {
    return (
        <div>
            <Canvas />
        </div>
    )
 }

 export default BoardIdPage;