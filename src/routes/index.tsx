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
  // FIX: This loader forces the browser to get the profile BEFORE showing the page
  loader: async () => {
    const { data } = await supabase.from("profile").select("*").single();
    return { profile: data };
  },
  component: Home,
});

function Home() {
  // Get the guaranteed data from the loader above
  const loaderData = Route.useLoaderData();

  // Keep your other queries here for the rest of the page
  const { data: achievements, isLoading: loadingAchievements } = useQuery({
    queryKey: ["achievements"],
    queryFn: async () => {
      const { data, error } = await supabase.from("achievements").select("*");
      if (error) throw error;
      return data;
    },
  });

  const { data: pillars, isLoading: loadingPillars } = useQuery({
    queryKey: ["about_pillars"],
    queryFn: async () => {
      const { data, error } = await supabase.from("about_pillars").select("*").order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const { data: skills, isLoading: loadingSkills } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const { data, error } = await supabase.from("skills").select("*").order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const { data: visionBeats, isLoading: loadingVision } = useQuery({
    queryKey: ["future_vision"],
    queryFn: async () => {
      const { data, error } = await supabase.from("future_vision").select("*").order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

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
      {/*
        We use loaderData.profile here.
        It is GUARANTEED to be there when the tab changes.
      */}
      <Hero data={loaderData.profile} isLoading={false} />

      <About items={pillars} isLoading={loadingPillars} />
      <Skills items={skills} isLoading={loadingSkills} />
      <Achievements items={achievements} isLoading={loadingAchievements} />
      <FutureVision items={visionBeats} isLoading={loadingVision} />
      <Support tiers={supportTiers} goal={supportGoal} isLoading={loadingTiers || loadingGoal} />
      <ContactCTA data={cta} isLoading={loadingCta} />
    </>
  );
}