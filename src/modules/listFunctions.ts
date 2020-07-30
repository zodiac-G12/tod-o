import { sampleTodoDataFunc } from './sampleTodoData';

type ListItem = {
    id: number,
    title: string,
    description: string,
    dead_line: string,
    degree: string,
    project_id: string,
    completeness: number,
    category: string,
    created: string
};

type List = ListItem[];

// Around List Functions
export const exchangeList = (id1: number, id2: number, list: List): List => {
    const savedList = JSON.parse(JSON.stringify(list));
    let pointIdx1: number|undefined,
        pointIdx2: number|undefined;

    if (id1 === id2) return savedList;

    // absolutely exist "idx"
    savedList.some((item: ListItem, idx: number)=>{
        if (item.id===id1) {
            pointIdx1 = idx;
            return true;
        }
        return false;
    });
    if (pointIdx1 !== 0 && !pointIdx1) return savedList;

    // absolutely exist "idx"
    savedList.some((item: ListItem, idx: number)=>{
        if (item.id===id2) {
            pointIdx2 = idx;
            return true;
        }
        return false;
    });
    if (pointIdx2 !== 0 && !pointIdx2) return savedList;

    const item1 = savedList[pointIdx1],
          item2 = savedList[pointIdx2];

    savedList[pointIdx2] = item1;
    savedList[pointIdx1] = item2;

    localStorage.todoDatas = JSON.stringify(savedList);
    return savedList;
}

export const addList = (category: string, list: List): List => {
    const newId = list.length!==0 ? list[list.length-1].id + 1 : 1;
    const addedList = list.concat(sampleTodoDataFunc(newId, category));
    localStorage.todoDatas = JSON.stringify(addedList);
    return addedList;
};

export const deleteList = (choiced: number[], list: List): List => {
    const deletedList = list.filter((item)=>!choiced.includes(item.id));
    localStorage.todoDatas = JSON.stringify(deletedList);
    return deletedList;
};

export const saveList = (key: string, value: string|number, id: number, list: List): List => {
    const savedList = JSON.parse(JSON.stringify(list));
    let pointIdx: number|undefined;
    // absolutely exist "idx"
    savedList.some((item: ListItem, idx: number)=>{
        if (item.id===id) {
            pointIdx = idx;
            return true;
        }
        return false;
    });
    if (pointIdx !== 0 && !pointIdx) return savedList;
    if (value==="PROGRESS" && savedList[pointIdx][key]!=="TODO") return savedList;
    if (value==="DONE" && savedList[pointIdx][key]!=="PROGRESS") return savedList;
    savedList[pointIdx][key] = value;
    localStorage.todoDatas = JSON.stringify(savedList);
    return savedList;
};

export const saveLists = (key: string, value: string|number, choiced: number[], list: List): List => {
    const savedList = JSON.parse(JSON.stringify(list));
    choiced.forEach(id=>{
        let pointIdx: number|undefined;
        savedList.some((item: ListItem, idx: number)=>{
            if (item.id===id) {
                pointIdx = idx;
                return true;
            }
            return false;
        });
        if (pointIdx !== 0 && !pointIdx) return;
        if (value==="PROGRESS" && savedList[pointIdx][key]!=="TODO") return;
        if (value==="DONE" && savedList[pointIdx][key]!=="PROGRESS") return;
        savedList[pointIdx][key] = value;
    });
    localStorage.todoDatas = JSON.stringify(savedList);
    return savedList;
};
