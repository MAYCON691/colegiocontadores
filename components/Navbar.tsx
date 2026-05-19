"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaUsers,
  FaCheckCircle,
  FaIdCard,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { menuItems, quickLinks, type MenuItem } from "@/lib/menu";

function isActiveItem(item: MenuItem, pathname: string): boolean {
  const current = pathname.toLowerCase();

  if (item.href) {
    const href = item.href.toLowerCase();

    if (href === "/") {
      if (current === "/") return true;
    } else if (current === href || current.startsWith(`${href}/`)) {
      return true;
    }
  }

  return item.children?.some((child) => isActiveItem(child, pathname)) ?? false;
}

function DesktopMenuItem({
  item,
  pathname,
}: {
  item: MenuItem;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const active = isActiveItem(item, pathname);

  if (!item.children) {
    return (
      <Link
        href={item.href ?? "#"}
        className={`menu-link relative whitespace-nowrap text-[14px] ${
          active ? "!text-[#b61b19]" : ""
        }`}
      >
        {item.label}
        {active && (
          <span className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-[#b61b19]" />
        )}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href ?? "#"}
        className={`menu-link relative inline-flex items-center gap-2 whitespace-nowrap text-[14px] ${
          active ? "!text-[#b61b19]" : ""
        }`}
      >
        {item.label}
        <FaChevronDown className="text-[10px]" />
        {active && (
          <span className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-[#b61b19]" />
        )}
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="absolute left-0 top-full z-[999] min-w-[250px] rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.18)]"
          >
            {item.children.map((child) => {
              const childActive = isActiveItem(child, pathname);

              return (
                <div key={child.label} className="group relative">
                  <Link
                    href={child.href ?? "#"}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold transition hover:bg-[#f8f6f1] hover:text-[#b61b19] ${
                      childActive
                        ? "bg-[#fff2f2] text-[#b61b19]"
                        : "text-slate-700"
                    }`}
                  >
                    {child.label}
                    {child.children && <FaChevronRight className="text-xs" />}
                  </Link>

                  {child.children && (
                    <>
                      <div className="absolute left-full top-0 h-full w-4" />

                      <div className="invisible absolute left-[calc(100%+8px)] top-0 min-w-[250px] rounded-2xl border border-slate-100 bg-white p-3 opacity-0 shadow-[0_25px_70px_rgba(15,23,42,0.18)] transition group-hover:visible group-hover:opacity-100">
                        {child.children.map((sub) => {
                          const subActive = isActiveItem(sub, pathname);

                          return (
                            <Link
                              key={sub.label}
                              href={sub.href ?? "#"}
                              className={`block rounded-xl px-4 py-3 text-[15px] font-semibold transition hover:bg-[#f8f6f1] hover:text-[#007636] ${
                                subActive
                                  ? "bg-[#fff2f2] text-[#b61b19]"
                                  : "text-slate-700"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileMenuItem({
  item,
  closeMenu,
  pathname,
}: {
  item: MenuItem;
  closeMenu: () => void;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const active = isActiveItem(item, pathname);

  if (!item.children) {
    return (
      <Link
        href={item.href ?? "#"}
        onClick={closeMenu}
        className={`rounded-xl px-4 py-3 text-base font-bold hover:bg-slate-100 ${
          active ? "bg-[#fff2f2] text-[#b61b19]" : "text-slate-700"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="rounded-xl bg-slate-50">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-bold hover:bg-slate-100 ${
          active ? "text-[#b61b19]" : "text-slate-800"
        }`}
      >
        {item.label}
        <FaChevronDown
          className={`text-xs transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-3 pb-3"
          >
            {item.href && (
              <Link
                href={item.href}
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-sm font-bold text-[#b61b19] hover:bg-white"
              >
                Ver {item.label}
              </Link>
            )}

            {item.children.map((child) => {
              const childActive = isActiveItem(child, pathname);

              return (
                <div key={child.label}>
                  <Link
                    href={child.href ?? "#"}
                    onClick={closeMenu}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-white ${
                      childActive ? "text-[#b61b19]" : "text-slate-700"
                    }`}
                  >
                    {child.label}
                  </Link>

                  {child.children && (
                    <div className="ml-4 border-l border-slate-200 pl-3">
                      {child.children.map((sub) => {
                        const subActive = isActiveItem(sub, pathname);

                        return (
                          <Link
                            key={sub.label}
                            href={sub.href ?? "#"}
                            onClick={closeMenu}
                            className={`block rounded-xl px-4 py-2 text-sm font-semibold hover:bg-white hover:text-[#007636] ${
                              subActive ? "text-[#b61b19]" : "text-slate-600"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const showQuickLinks = pathname === "/";

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="h-[32px] bg-[linear-gradient(90deg,#6f0d0b_0%,#b61b19_30%,#cf8f8f_50%,#b61b19_70%,#6f0d0b_100%)] md:h-[34px]">
        <div className="section-container flex h-full items-center justify-end gap-2 md:gap-3">
          <a
            href="https://www.facebook.com/colegiodecontadoreslpz/?locale=es_LA"
            target="_blank"
            rel="noreferrer"
            className="social-glass"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/59171563068"
            target="_blank"
            rel="noreferrer"
            className="social-glass"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="social-glass"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="h-[34px] bg-[linear-gradient(90deg,#003519_0%,#007636_30%,#7db796_50%,#007636_70%,#003519_100%)] md:h-[42px]" />

      <div className="bg-white/96 shadow-md backdrop-blur-xl">
        <div className="section-container relative flex h-[74px] items-center justify-between gap-4 md:h-[76px]">
          <Link href="/" className="flex min-w-fit items-center gap-3">
            <div className="relative h-[76px] w-[76px] shrink-0 md:-mt-10 md:h-[116px] md:w-[116px]">
              <Image
                src="/logo-contador.png"
                alt="Logo Colegio de Contadores La Paz"
                fill
                sizes="116px"
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>

            <div className="hidden sm:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b61b19] md:text-xs">
                Colegio de
              </p>
              <h1 className="text-base font-extrabold text-slate-800 md:text-lg">
                Contadores La Paz
              </h1>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 font-semibold text-slate-700 xl:flex">
            {menuItems.map((item) => (
              <DesktopMenuItem
                key={item.label}
                item={item}
                pathname={pathname}
              />
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-800 xl:hidden"
            aria-label="Abrir menú"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {showQuickLinks && (
          <div className="hidden bg-transparent xl:block">
            <div className="section-container flex justify-center gap-5">
              <a
                href={quickLinks[0].href}
                target="_blank"
                rel="noreferrer"
                className="quick-menu-button"
              >
                <FaUsers />
                {quickLinks[0].label}
              </a>
              <a
                href={quickLinks[1].href}
                target="_blank"
                rel="noreferrer"
                className="quick-menu-button"
              >
                <FaCheckCircle />
                {quickLinks[1].label}
              </a>
              <a
                href={quickLinks[2].href}
                target="_blank"
                rel="noreferrer"
                className="quick-menu-button"
              >
                <FaIdCard />
                {quickLinks[2].label}
              </a>
            </div>
          </div>
        )}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="max-h-[75vh] overflow-y-auto border-t border-slate-200 bg-white xl:hidden"
            >
              <div className="section-container grid gap-2 py-4">
                {menuItems.map((item) => (
                  <MobileMenuItem
                    key={item.label}
                    item={item}
                    pathname={pathname}
                    closeMenu={() => setOpen(false)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}