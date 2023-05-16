type MiPrimerComponenteProps = {
  title: string;
};
export const MiPrimerComponente = (props: MiPrimerComponenteProps) => {
 const {title} = props
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
