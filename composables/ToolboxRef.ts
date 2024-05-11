interface ToolboxText {
  tx: string
  mb: string
  ps: string
}

export interface ToolboxRef {
  ref: string
  txGroup: ToolboxText[]
  ftGroup: { ft: string }
  ELANBegin: string
  ELANEnd: string
  ELANParticipant: string
}
