import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import {Element, Rectangle, selectedElementState} from './components/Rectangle/Rectangle'
import { EditProperties } from './EditProperties'
import {PageContainer} from './PageContainer'
import {Toolbar} from './Toolbar'

export const elementsState = atom<number[]>({
  key: 'elements',
  default: [],
})

export type SetElement = (indexToSet: number, newElement: Element) => void

function Canvas() {
    const setSelectedElement = useSetRecoilState(selectedElementState)
    const elements = useRecoilValue(elementsState)
    
    return (
                <PageContainer
                    onClick={() => {
                        setSelectedElement(null)
                    }}
                >
                    <Toolbar />
                    <EditProperties />
                    {elements.map((id) => (
                        <Rectangle key={id} id={id} />
                    ))}
                </PageContainer>
    )
}

export default Canvas