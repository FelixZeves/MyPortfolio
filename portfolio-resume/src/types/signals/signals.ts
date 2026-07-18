import type { UIPosition } from "../uiPosition";

export interface SignalElementBase {

    id: string

    position: UIPosition

    color?: string

    opacity?: number
}

export interface SignalLineData extends SignalElementBase {

    type: 'line'

    direction: 'horizontal' | 'vertical'

    length: string

    thickness?: string

    flow?: boolean

    flowOffset?: string

}

export interface SignalPointData extends SignalElementBase {

    type: 'point'

    size?: string

    pulse?: boolean

}

export interface SignalCrossData extends SignalElementBase {

    type: 'cross'

    size?: string

    thickness?: string

}

export type SignalElement =
    | SignalLineData
    | SignalPointData
    | SignalCrossData