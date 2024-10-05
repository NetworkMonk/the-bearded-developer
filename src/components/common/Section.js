export default function Section(props) {
  const { children } = props;

  return (
    <section className="relative my-5">
      {children}
    </section>
  )
}