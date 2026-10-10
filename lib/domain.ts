/**
 * Shared domain vocabulary for the planned API and Neon persistence layer.
 * The current prototype remains browser-local and does not use these types yet.
 */
export type Role = 'Process Engineer' | 'Senior Engineer' | 'Line Operator';

export type IncidentStatus =
  | 'OPEN'
  | 'DIAGNOSING'
  | 'AWAITING_DECISION'
  | 'AWAITING_SECOND_APPROVAL'
  | 'IN_ACTION'
  | 'VERIFYING'
  | 'RESOLVED'
  | 'KNOWLEDGE_SAVED';

export type Severity = 'Critical' | 'Warning';

export interface IncidentSummary {
  id: string;
  plantId: string;
  stationId: string;
  severity: Severity;
  status: IncidentStatus;
  openedAt: string;
  updatedAt: string;
}

export interface AuditEvent {
  incidentId: string;
  actorRole: Role;
  action: string;
  recordedAt: string;
  details: string;
}
