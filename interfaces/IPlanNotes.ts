export default interface IPlanNotes {
  id: number,
  notes: {
    [key: string | number]: { id: string, content: string }[],
  }
}
