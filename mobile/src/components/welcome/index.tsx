import { Image, Text, View } from "react-native";

import { s } from "./styles";

export function Welcome() {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={s.logo}></Image>

      <Text style={s.title}>Boas vindas ao Nearby</Text>

      <Text>
        Tenha cupons de vantagens para usar em {"\n"}seus estabelecimentos favoritos.
      </Text>
    </View>
  );
}
