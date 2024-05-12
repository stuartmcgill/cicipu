export interface TextGroup {
  tx: string
  mb: string[] | string
  ge: string[] | string
  ps: string
}

export interface ToolboxRef {
  ref: string
  txGroup: TextGroup[] | TextGroup
  ftGroup: { ft: string }
  ELANBegin: string
  ELANEnd: string
  ELANParticipant: string
}
