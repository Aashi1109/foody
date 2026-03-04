import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:lucide_icons/lucide_icons.dart';
import 'package:cached_network_image/cached_network_image.dart';
import '../theme/theme.dart';
import '../widgets/header.dart';

class ThreadScreen extends StatelessWidget {
  final String id;
  const ThreadScreen({super.key, required this.id});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.surface,
      body: Column(
        children: [
          AppHeader(
            title: 'Thread',
            onBack: () => context.go('/chat/1'),
            rightElement: Container(
              width: 40,
              height: 40,
              decoration: const BoxDecoration(
                color: AppColors.muted,
                shape: BoxShape.circle,
              ), 
              child: const Icon(
                LucideIcons.moreHorizontal,
                size: 20,
                color: AppColors.primary,
              ), 
            ), 
          ), 
          Expanded(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(24),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Original message
                  Container(
                    padding: const EdgeInsets.all(20),
                    decoration: BoxDecoration(
                      color: AppColors.muted,
                      borderRadius: BorderRadius.circular(24),
                      border: Border.all(color: AppColors.border),
                    ), 
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            Container(
                              padding: const EdgeInsets.symmetric(
                                horizontal: 8,
                                vertical: 2,
                              ), 
                              decoration: BoxDecoration(
                                color: AppColors.primary,
                                borderRadius: BorderRadius.circular(50),
                              ), 
                              child: const Text(
                                'ORIGINAL',
                                style: TextStyle(
                                  fontSize: 8,
                                  fontWeight: FontWeight.w900,
                                  letterSpacing: 2,
                                  color: AppColors.surface,
                                ), 
                              ), 
                            ), 
                            const SizedBox(width: 8),
                            const Text(
                              'Marcus C.',
                              style: TextStyle(
                                fontSize: 12,
                                fontWeight: FontWeight.w700,
                              ), 
                            ), 
                          ],
                        ), 
                        const SizedBox(height: 12),
                        const Text(
                          'Is there free parking near the entrance? I want to bring some extra supplies for the event.',
                          style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.w500,
                            height: 1.5,
                          ), 
                        ), 
                        const SizedBox(height: 12),
                        const Text(
                          '10:15 AM',
                          style: TextStyle(
                            fontSize: 10,
                            fontWeight: FontWeight.w700,
                            color: AppColors.mutedForeground,
                          ), 
                        ), 
                      ],
                    ), 
                  ), 
                  const SizedBox(height: 16),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 8),
                    child: Row(
                      children: [
                        Container(
                          width: 1,
                          height: 24,
                          color: AppColors.border,
                        ), 
                        const SizedBox(width: 12),
                        const Text(
                          '3 REPLIES',
                          style: TextStyle(
                            fontSize: 10,
                            fontWeight: FontWeight.w700,
                            letterSpacing: 2,
                            color: AppColors.mutedForeground,
                          ), 
                        ), 
                      ],
                    ), 
                  ), 
                  const SizedBox(height: 16),

                  // Replies
                  _reply(
                    'https://picsum.photos/seed/r1/100/100',
                    'Lisa W.',
                    "Yes! There's a free lot behind the community center. It fills up fast so come early 🚗",
                    '10:18 AM',
                    3,
                    null,
                  ), 
                  const SizedBox(height: 24),
                  _reply(
                    'https://picsum.photos/seed/r2/100/100',
                    'Alex K.',
                    "I usually park on Oak Street. It's about a 2 min walk. Metered parking is free after 6pm.",
                    '10:22 AM',
                    1,
                    null,
                  ), 
                  const SizedBox(height: 24),
                  _reply(
                    'https://picsum.photos/seed/r3/100/100',
                    'Jordan P.',
                    "Pro tip: there is also bike parking right at the entrance!",
                    '10:25 AM',
                    0,
                    'https://picsum.photos/seed/bike/600/400',
                  ), 
                ],
              ), 
            ), 
          ), 

          // Reply input
          Container(
            padding: EdgeInsets.fromLTRB(
              24,
              24,
              24,
              MediaQuery.of(context).padding.bottom + 16,
            ), 
            decoration: const BoxDecoration(
              color: AppColors.surface,
              border: Border(top: BorderSide(color: AppColors.border)),
            ), 
            child: Row(
              children: [
                Container(
                  width: 48,
                  height: 48,
                  decoration: const BoxDecoration(
                    color: AppColors.muted,
                    shape: BoxShape.circle,
                  ), 
                  child: const Icon(
                    LucideIcons.plus,
                    size: 24,
                    color: AppColors.primary,
                  ), 
                ), 
                const SizedBox(width: 12),
                Expanded(
                  child: Container(
                    height: 48,
                    padding: const EdgeInsets.only(left: 24, right: 8),
                    decoration: BoxDecoration(
                      color: AppColors.muted,
                      borderRadius: BorderRadius.circular(50),
                      border: Border.all(color: AppColors.border),
                    ), 
                    child: Row(
                      children: [
                        const Expanded(
                          child: TextField(
                            decoration: InputDecoration(
                              hintText: 'Reply to thread...',
                              hintStyle: TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.w700,
                                color: AppColors.mutedForeground,
                              ), 
                              border: InputBorder.none,
                            ), 
                            style: TextStyle(
                              fontSize: 14,
                              fontWeight: FontWeight.w700,
                            ), 
                          ), 
                        ), 
                        const Icon(
                          LucideIcons.smile,
                          size: 20,
                          color: AppColors.mutedForeground,
                        ), 
                        const SizedBox(width: 8),
                        Container(
                          width: 40,
                          height: 40,
                          decoration: BoxDecoration(
                            color: AppColors.primary,
                            shape: BoxShape.circle,
                            boxShadow: [
                              BoxShadow(
                                color: AppColors.primary.withValues(alpha: 0.2),
                                blurRadius: 12,
                                offset: const Offset(0, 4),
                              ), 
                            ],
                          ), 
                          child: const Icon(
                            LucideIcons.send,
                            size: 16,
                            color: AppColors.surface,
                          ), 
                        ), 
                      ],
                    ), 
                  ), 
                ), 
              ],
            ), 
          ), 
        ],
      ),
    );
  }

  Widget _reply(
    String avatar,
    String name,
    String text,
    String time,
    int likes,
    String? photo,
  ) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        ClipOval(
          child: ColorFiltered(
            colorFilter: const ColorFilter.mode(
              Colors.grey,
              BlendMode.saturation,
            ), 
            child: CachedNetworkImage(
              imageUrl: avatar,
              width: 40,
              height: 40,
              fit: BoxFit.cover,
            ), 
          ), 
        ), 
        const SizedBox(width: 12),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                name,
                style: const TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w700,
                ), 
              ), 
              const SizedBox(height: 4),
              Text(
                text,
                style: const TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w500,
                  height: 1.5,
                ), 
              ), 
              if (photo != null) ...[
                const SizedBox(height: 12),
                ClipRRect(
                  borderRadius: BorderRadius.circular(16),
                  child: ColorFiltered(
                    colorFilter: const ColorFilter.mode(
                      Colors.grey,
                      BlendMode.saturation,
                    ), 
                    child: CachedNetworkImage(
                      imageUrl: photo,
                      fit: BoxFit.cover,
                      width: double.infinity,
                      height: 160,
                    ), 
                  ), 
                ), 
              ],
              const SizedBox(height: 8),
              Row(
                children: [
                  Text(
                    time,
                    style: const TextStyle(
                      fontSize: 10,
                      fontWeight: FontWeight.w700,
                      color: AppColors.mutedForeground,
                    ), 
                  ), 
                  const SizedBox(width: 16),
                  const Icon(
                    LucideIcons.heart,
                    size: 14,
                    color: AppColors.mutedForeground,
                  ), 
                  const SizedBox(width: 4),
                  Text(
                    '$likes',
                    style: const TextStyle(
                      fontSize: 10,
                      fontWeight: FontWeight.w700,
                      color: AppColors.mutedForeground,
                    ), 
                  ), 
                  const SizedBox(width: 16),
                  const Icon(
                    LucideIcons.reply,
                    size: 14,
                    color: AppColors.primary,
                  ), 
                  const SizedBox(width: 4),
                  const Text(
                    'Reply',
                    style: TextStyle(
                      fontSize: 10,
                      fontWeight: FontWeight.w700,
                      color: AppColors.primary,
                    ), 
                  ), 
                ],
              ), 
            ],
          ), 
        ), 
      ],
    );
  }
}
