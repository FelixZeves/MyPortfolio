import type { UIPosition } from '@/types/uiPosition'
import type { SignalCoordinates } from '@/types/signals/signalCoordinates'


export function parseSignalPosition(
    position:UIPosition
):SignalCoordinates {


    return {

        x:
            position.left
                ? parseFloat(position.left)
                : position.right
                    ? 100 - parseFloat(position.right)
                    : 0,


        y:
            position.top
                ? parseFloat(position.top)
                : position.bottom
                    ? 100 - parseFloat(position.bottom)
                    : 0

    }

}