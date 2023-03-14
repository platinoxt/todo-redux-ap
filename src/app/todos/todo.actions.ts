import { createAction, props } from "@ngrx/store";

export const create = createAction('[TODO Component] Create TODO', props<{ text: string }>());
export const toggle = createAction('[TODO Component] Toggle TODO', props<{ id: number }>());
export const edit = createAction('[TODO Component] Edit TODO', props<{ id: number, text: string }>());
export const remove = createAction('[TODO Component] Remove TODO', props<{ id: number }>());
export const toogleAll = createAction('[TODO Component] Toogle All TODO', props<{ complete: boolean }>());
export const clearCompleted = createAction('[TODO Component] Clear Completed');