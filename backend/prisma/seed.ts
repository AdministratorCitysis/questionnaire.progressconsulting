import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const email = process.env.ADMIN_SEED_EMAIL ?? 'admin@progressconsulting.be';
  const password = process.env.ADMIN_SEED_PASSWORD ?? 'ChangeMe_2024!';
  const name = process.env.ADMIN_SEED_NAME ?? 'Admin';

  const existing = await prisma.admin.findUnique({ where: { email } });

  if (existing) {
    console.log(`[seed] Admin already exists: ${email} — skipping.`);
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const admin = await prisma.admin.create({
    data: { email, passwordHash, name },
  });

  console.log(`[seed] Admin created:`);
  console.log(`       id:    ${admin.id}`);
  console.log(`       email: ${admin.email}`);
  console.log(`       name:  ${admin.name}`);
  console.log(`\n⚠️  Change the admin password immediately after first login.`);
}

main()
  .catch((err) => {
    console.error('[seed] Failed:', err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
