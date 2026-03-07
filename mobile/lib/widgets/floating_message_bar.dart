import 'package:flutter/material.dart';
import 'package:lucide_icons/lucide_icons.dart';
import '../theme/theme.dart';

class Attachment {
  final String id;
  final String name;
  final String url;

  Attachment({required this.id, required this.name, required this.url});
}

class FloatingMessageBar extends StatefulWidget {
  final String placeholder;
  final Function(String message, List<Attachment> attachments) onSend;
  final bool isVisible;

  const FloatingMessageBar({
    super.key,
    this.placeholder = 'Add a reply...',
    required this.onSend,
    this.isVisible = true,
  });

  @override
  State<FloatingMessageBar> createState() => _FloatingMessageBarState();
}

class _FloatingMessageBarState extends State<FloatingMessageBar> {
  final TextEditingController _controller = TextEditingController();
  final List<Attachment> _attachments = [];

  void _handleSend() {
    if (_controller.text.trim().isNotEmpty || _attachments.isNotEmpty) {
      widget.onSend(_controller.text, List.from(_attachments));
      _controller.clear();
      setState(() {
        _attachments.clear();
      });
    }
  }

  void _addMockAttachment() {
    if (_attachments.length >= 5) return;
    setState(() {
      _attachments.add(
        Attachment(
          id: DateTime.now().millisecondsSinceEpoch.toString(),
          name: 'file_name.jpg',
          url:
              'https://picsum.photos/seed/attachment${DateTime.now().millisecondsSinceEpoch}/100/100',
        ),
      );
    });
  }

  void _removeAttachment(String id) {
    setState(() {
      _attachments.removeWhere((a) => a.id == id);
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedSlide(
      offset: widget.isVisible ? Offset.zero : const Offset(0, 1),
      duration: const Duration(milliseconds: 300),
      curve: Curves.easeInOut,
      child: AnimatedOpacity(
        opacity: widget.isVisible ? 1.0 : 0.0,
        duration: const Duration(milliseconds: 300),
        child: Container(
          padding: EdgeInsets.fromLTRB(
            24,
            0,
            24,
            MediaQuery.of(context).padding.bottom + 16,
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Attachment Chips
              if (_attachments.isNotEmpty)
                Padding(
                  padding: const EdgeInsets.only(bottom: 12),
                  child: Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: _attachments.map((file) {
                      return AnimatedSwitcher(
                        duration: const Duration(milliseconds: 300),
                        transitionBuilder:
                            (Widget child, Animation<double> animation) {
                              return FadeTransition(
                                opacity: animation,
                                child: ScaleTransition(
                                  scale: animation,
                                  child: child,
                                ),
                              );
                            },
                        child: _buildAttachmentChip(file),
                      );
                    }).toList(),
                  ),
                ),

              // Message Bar Pill
              Container(
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                  color: AppColors.surface,
                  borderRadius: BorderRadius.circular(50),
                  border: Border.all(color: AppColors.border),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withValues(alpha: 0.12),
                      blurRadius: 30,
                      offset: const Offset(0, 8),
                    ),
                  ],
                ),
                child: Row(
                  children: [
                    GestureDetector(
                      onTap: _addMockAttachment,
                      child: Container(
                        width: 40,
                        height: 40,
                        decoration: const BoxDecoration(
                          color: AppColors.muted,
                          shape: BoxShape.circle,
                        ),
                        child: const Icon(
                          LucideIcons.plus,
                          size: 20,
                          color: AppColors.primary,
                        ),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: TextField(
                        controller: _controller,
                        onChanged: (val) => setState(() {}),
                        decoration: InputDecoration(
                          hintText: widget.placeholder,
                          hintStyle: TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w700,
                            color: AppColors.mutedForeground.withValues(
                              alpha: 0.6,
                            ),
                          ),
                          border: InputBorder.none,
                          isDense: true,
                          contentPadding: const EdgeInsets.symmetric(
                            horizontal: 8,
                          ),
                        ),
                        style: const TextStyle(
                          fontSize: 14,
                          fontWeight: FontWeight.w700,
                          color: AppColors.primary,
                        ),
                      ),
                    ),
                    const Icon(
                      LucideIcons.image,
                      size: 20,
                      color: AppColors.mutedForeground,
                    ),
                    const SizedBox(width: 12),
                    const Icon(
                      LucideIcons.smile,
                      size: 20,
                      color: AppColors.mutedForeground,
                    ),
                    const SizedBox(width: 8),
                    GestureDetector(
                      onTap: _handleSend,
                      child: Opacity(
                        opacity:
                            (_controller.text.trim().isNotEmpty ||
                                _attachments.isNotEmpty)
                            ? 1.0
                            : 0.5,
                        child: Container(
                          width: 40,
                          height: 40,
                          decoration: const BoxDecoration(
                            color: AppColors.primary,
                            shape: BoxShape.circle,
                          ),
                          child: const Icon(
                            LucideIcons.send,
                            size: 14,
                            color: AppColors.surface,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildAttachmentChip(Attachment file) {
    return Container(
      padding: const EdgeInsets.fromLTRB(4, 4, 12, 4),
      decoration: BoxDecoration(
        color: AppColors.surface,
        borderRadius: BorderRadius.circular(50),
        border: Border.all(color: AppColors.border),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.08),
            blurRadius: 12,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: 32,
            height: 32,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: AppColors.border),
              image: DecorationImage(
                image: NetworkImage(file.url),
                fit: BoxFit.cover,
              ),
            ),
          ),
          const SizedBox(width: 8),
          ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 120),
            child: Text(
              file.name,
              style: const TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.w700,
                color: AppColors.primary,
              ),
              overflow: TextOverflow.ellipsis,
            ),
          ),
          const SizedBox(width: 8),
          GestureDetector(
            onTap: () => _removeAttachment(file.id),
            child: Icon(
              LucideIcons.x,
              size: 14,
              color: AppColors.mutedForeground,
            ),
          ),
        ],
      ),
    );
  }
}
