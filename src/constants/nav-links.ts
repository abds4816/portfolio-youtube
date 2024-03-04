import { NavLink } from "@/types/interfaces";
import { Book, MessageSquareText, User, Wrench } from "lucide-react";

export const navLinks: NavLink[] = [
  {
    title: "about",
    href: "#about",
    icon: User,
  },
  {
    title: "skills",
    href: "#skills",
    icon: Wrench,
  },
  {
    title: "projects",
    href: "#projects",
    icon: Book,
  },
  {
    title: "contact",
    href: "#contact",
    icon: MessageSquareText,
  },
];
