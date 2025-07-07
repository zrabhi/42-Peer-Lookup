export enum markStatus {
  IN_PROGRESS = 'in_progress',
  FINISHED = 'finished',
  SEARCHING_A_GROUP = 'searching_a_group',
  WAITING_FOR_CORRESTION = 'waiting_for_correction',
}

export interface Project {
  id: number | null;
  name: string | null;
  parent_id: number | null;
  slug: string | null;
}

{
  /*
    
    if validated is null , the status must be in prgress
    */
}
export interface CursusProject {
  id: number;
  created_at: string;
  updated_at: string;
  current_team_id: number;
  // cursus_ids: number[];
  final_mark: number | null;
  marked: boolean;
  marked_at: string | null;
  occurrence: number;
  retriable_at: string | null;
  status: markStatus;
  project: Project;
  'validated?': boolean | null; // ← You added this manually, so keep it if your app uses it
}
