import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gmpupjnxopeafyhnqscw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtcHVwam54b3BlYWZ5aG5xc2N3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzAxNzYxOCwiZXhwIjoyMDA4NTkzNjE4fQ.MwrWEKenDDq2IJPEw2AnuQ6a4slR9HE2MsEPzB0jmrQ";
console.log(supabaseUrl, supabaseKey);
const supabase = createClient(supabaseUrl, supabaseKey);

type creatorType = {
  created_at: string;
  id: number;
  name: string;
  url: string;
  description: string;
  twitter?: string | null;
  instagram?: string | null;
  youtube?: string | null;
};
export async function getCreators(): Promise<creatorType[]> {
  const { data, error } = await supabase.from("creators").select();

  if (error) {
    console.log(error);
    return [];
  }

  console.log(data);
  return data;
}

export async function postCreator(
  name: string,
  url: string,
  description: string,
  youtube: string,
  instagram: string,
  twitter: string,
) {
  const rows = {
    name,
    url,
    description,
    youtube,
    instagram,
    twitter,
  };
  const { error } = await supabase.from("creators").insert([rows]);

  if (error) {
    console.log(error);
    return error;
  }

  return "success";
}

export async function getCreatorById(id: number): Promise<creatorType | null> {
  const { data, error } = await supabase
    .from("creators")
    .select()
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    return null;
  }

  console.log(data);
  return data;
}
export async function editCreatorById(
  id: number,
  name: string,
  url: string,
  description: string,
  youtube: string,
  instagram: string,
  twitter: string,
) {
  const updateData = {
    name,
    url,
    description,
    youtube,
    instagram,
    twitter,
  };

  const { error } = await supabase
    .from("creators")
    .update(updateData)
    .eq("id", id);

  if (error) {
    console.error(error);
    return error;
  }

  return "success";
}

export async function deleteCreatorById(id: number) {
  const { error } = await supabase.from("creators").delete().eq("id", id);

  if (error) {
    console.error(error);
    return error;
  }

  return "success";
}
