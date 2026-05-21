import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase";

import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Achievements } from "@/components/sections/achievements";
import { FutureVision } from "@/components/sections/future-vision";
import { Support } from "@/components/sections/support";
import { ContactCTA } from "@/components/sections/contact-cta";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  // 1. Fetch "Projects" (The big things you built)
  const { data: projects, isLoading: loadingProjects } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  // 2. Fetch "Achievements" (The numbers like '1200+ Lives Touched')
  const { data: achievements, isLoading: loadingAchievements } = useQuery({
    queryKey: ["achievements"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("achievements")
        .select("*");
      if (error) throw error;
      return data;
    },
  });

  const { data: profile, isLoading: loadingProfile } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data, error } = await supabase.from("profile").select("*").single(); // .single() because there is only one YOU
      if (error) throw error;
      return data;
    },
  });
  const { data: pillars, isLoading: loadingPillars } = useQuery({
    queryKey: ["about_pillars"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("about_pillars")
        .select("*")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });
  const { data: skills, isLoading: loadingSkills } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("skills")
        .select("*")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });
  const { data: visionBeats, isLoading: loadingVision } = useQuery({
    queryKey: ["future_vision"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("future_vision")
        .select("*")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });
  // 1. Inside your Home() function, add these two trips to the sky
  const { data: supportTiers, isLoading: loadingTiers } = useQuery({
    queryKey: ["support_tiers"],
    queryFn: async () => {
      const { data, error } = await supabase.from("support_tiers").select("*").order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const { data: supportGoal, isLoading: loadingGoal } = useQuery({
    queryKey: ["support_goal"],
    queryFn: async () => {
      const { data, error } = await supabase.from("support_goals").select("*").filter("is_active", "eq", true).single();
      if (error) throw error;
      return data;
    },
  });
  const { data: cta, isLoading: loadingCta } = useQuery({
    queryKey: ["cta_content"],
    queryFn: async () => {
      const { data, error } = await supabase.from("cta_content").select("*").single();
      if (error) throw error;
      return data;
    },
  });

  return (
    <>
      <Hero data={profile} isLoading={loadingProfile} />
      <About items={pillars} isLoading={loadingPillars} />
      <Skills items={skills} isLoading={loadingSkills} />
      {/* Handing the "Achievement" toys to the Achievement section */}
      <Achievements
        items={achievements}
        isLoading={loadingAchievements}
      />

      {/*
         If you have a section for Projects, you would pass them here too.
         For now, we are focusing on your numbers!
      */}
      <FutureVision items={visionBeats} isLoading={loadingVision} />

      <Support
        tiers={supportTiers}
        goal={supportGoal}
        isLoading={loadingTiers || loadingGoal}
      />

      <ContactCTA data={cta} isLoading={loadingCta} />
    </>
  );
}