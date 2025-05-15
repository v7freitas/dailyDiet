import { Avatar, Container, Logo } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo source={require("@assets/Logo/Logo.png")} />
      <Avatar source={require("@assets/Avatar/Avatar.png")} />
    </Container>
  );
}
