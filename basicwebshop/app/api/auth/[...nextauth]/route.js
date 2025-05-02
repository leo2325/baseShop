import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import users from "@/datas/usersDatas"; // <-- ton fichier d'utilisateurs mockés

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Identifiants",
      credentials: {
        username: { label: "Nom d'utilisateur", type: "text" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        const user = users.find(
          (u) => u.userName === credentials.username && u.password === credentials.password
        );

        if (user) {
          return {
            id: user.id,
            name: user.name,
            familyName: user.familyName,
            email: user.mail,
            address: user.address,
            category: user.category,
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", // tu peux adapter selon ta page
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
