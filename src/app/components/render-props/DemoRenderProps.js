import { RenderCounter } from "./RenderCounter";
import { RenderGuest } from "./RenderGuest";
import { RenderName } from "./RenderName";

export function DemoRenderProps() {
  const text = 'welcome to react!';
  return (
    <>
    <p>Your name is&nbsp;
      <RenderName>{
        (name) => (
            <strong>{ name }, { text }</strong>
          )
      }</RenderName>
    </p>
    <RenderGuest>{
      (guests) => {
        return guests.map((guest) => (
          <li key={guest.id}>Halo {guest.name} dari {guest.address}, no. telp. {guest.phone}</li>
        ))
      }
    }</RenderGuest>
    <RenderCounter>{
      (increment, decrement) => (
        <>
          <button className="btn btn-dark btn-sm me-2" onClick={increment}>Increment</button>
          <button className="btn btn-dark btn-sm" onClick={decrement}>Decrement</button>
        </>
      )
    }</RenderCounter>
    </>
  )
}
