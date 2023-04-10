import { createBoard } from '@wixc3/react-board';
import { NewComponent } from '../../../components/new-component/new-component';

export default createBoard({
    name: 'NewComponent',
    Board: () => <NewComponent />,
    environmentProps: {
        canvasWidth: 776,
        canvasHeight: 490,
    },
});
