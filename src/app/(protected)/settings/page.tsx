import { auth, signOut } from "@/lib/auth";

export default async function Page() {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session, null, 2)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
}
