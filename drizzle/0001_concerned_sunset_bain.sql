ALTER TABLE user ADD `password` text;--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);